"use client";

import { useState, useRef, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface DatePickerProps {
  label: string;
  error?: string;
  value: string;
  onChange: (e: { target: { value: string } }) => void;
  className?: string;
}

export default function DatePicker({ 
  label, 
  error, 
  value,
  onChange,
  className = ""
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const pickerRef = useRef<HTMLDivElement>(null);

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const handleDateSelect = (day: number) => {
    const { year, month } = getDaysInMonth(currentMonth);
    const monthStr = String(month + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    const formattedDate = `${year}-${monthStr}-${dayStr}`;
    onChange({ target: { value: formattedDate } });
    setIsOpen(false);
  };

  const handleMonthChange = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const isToday = (day: number) => {
    const today = new Date();
    const { year, month } = getDaysInMonth(currentMonth);
    return today.getDate() === day && 
           today.getMonth() === month && 
           today.getFullYear() === year;
  };

  const isSelected = (day: number) => {
    if (!value) return false;
    const [year, month, date] = value.split('-').map(Number);
    const { year: currentYear, month: currentMonthNum } = getDaysInMonth(currentMonth);
    return date === day && 
           (month - 1) === currentMonthNum && 
           year === currentYear;
  };

  const isPastDate = (day: number) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const { year, month } = getDaysInMonth(currentMonth);
    const checkDate = new Date(year, month, day);
    checkDate.setHours(0, 0, 0, 0);
    return checkDate <= today;
  };

  const renderCalendar = () => {
    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
    const days = [];
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isPast = isPastDate(day);
      const todayClass = isToday(day) ? 'ring-2 ring-primary-green' : '';
      const selectedClass = isSelected(day) ? 'bg-primary-green text-white font-bold' : '';
      const hoverClass = !isPast && !isSelected(day) ? 'hover:bg-gray-100' : '';
      const disabledClass = isPast ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer';

      days.push(
        <button
          key={day}
          type="button"
          onClick={() => !isPast && handleDateSelect(day)}
          disabled={isPast}
          className={`p-1.5 rounded text-xs transition-colors ${todayClass} ${selectedClass} ${hoverClass} ${disabledClass}`}
        >
          {day}
        </button>
      );
    }

    return (
      <div className="space-y-1">
        {/* Week days header */}
        <div className="grid grid-cols-7 gap-0.5 mb-1">
          {weekDays.map(day => (
            <div key={day} className="text-[10px] font-semibold text-gray-600 text-center p-1">
              {day}
            </div>
          ))}
        </div>
        {/* Days grid */}
        <div className="grid grid-cols-7 gap-0.5">
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full" ref={pickerRef}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        {/* Input Field */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors bg-white cursor-pointer flex items-center justify-between ${
            error ? 'border-red-500' : isOpen ? 'border-primary-green' : 'border-gray-300'
          } ${className}`}
        >
          <span className={value ? 'text-gray-900' : 'text-gray-500'}>
            {value ? formatDisplayDate(value) : 'Select a date'}
          </span>
          <Calendar className={`w-5 h-5 ${isOpen ? 'text-primary-green' : 'text-gray-400'}`} />
        </div>

        {/* Calendar Popup */}
        {isOpen && (
          <div className="absolute right-0 mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-xl p-3 z-50 w-64">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-2">
              <button
                type="button"
                onClick={() => handleMonthChange('prev')}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <h3 className="text-sm font-bold text-gray-900">
                {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </h3>
              <button
                type="button"
                onClick={() => handleMonthChange('next')}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Calendar Grid */}
            {renderCalendar()}

            {/* Footer */}
            <div className="mt-2 pt-2 border-t border-gray-200 flex justify-between items-center">
              <button
                type="button"
                onClick={() => {
                  const today = new Date();
                  today.setDate(today.getDate() + 1);
                  const year = today.getFullYear();
                  const month = String(today.getMonth() + 1).padStart(2, '0');
                  const day = String(today.getDate()).padStart(2, '0');
                  const formattedDate = `${year}-${month}-${day}`;
                  onChange({ target: { value: formattedDate } });
                  setIsOpen(false);
                }}
                className="text-xs text-primary-green font-medium hover:underline"
              >
                Tomorrow
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-xs text-gray-600 hover:text-gray-900"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
