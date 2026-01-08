import {
  Facebook,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F7F8FC] dark:bg-background-dark border-t border-gray-100 dark:border-white/10 mt-12 py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center sm:text-left">
        {/* Brand */}
        <div className="md:col-span-1 flex flex-col gap-4 items-center sm:items-start">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <img
              src="/assets/images/Piyulogo.jpg"
              alt="Piyu Products logo"
              className="size-8 rounded-4xl object-contain"
            />
            <h2 className="text-xl font-bold tracking-tight text-text-main dark:text-white">
              Piyu Products
            </h2>
          </div>

          <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">
            Bringing you the tastiest, crunchiest, and most delightful snacks
            for every occasion. Quality ingredients, unforgettable taste.
          </p>
        </div>

        {/* Quick Links */}
        <div className="hidden md:block">
          <h3 className="font-bold text-text-main dark:text-white mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {["Home", "Food Items", "About Us", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-text-muted dark:text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-text-main dark:text-white mb-4">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-start justify-center sm:justify-start gap-2 sm:gap-4 text-text-muted dark:text-gray-400 text-sm">
              <MapPin
                className="mt-0.5 size-4 flex-none text-primary"
                aria-hidden="true"
              />
              <span className="leading-relaxed">
                <span className="block">123 Snack Street Flavor Town</span>
              </span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 text-text-muted dark:text-gray-400 text-sm">
              <Phone
                className="size-4 flex-none text-primary"
                aria-hidden="true"
              />
              <a
                href="tel:+15551234567"
                className="hover:text-primary transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 text-text-muted dark:text-gray-400 text-sm">
              <Mail
                className="size-4 flex-none text-primary"
                aria-hidden="true"
              />
              <a
                href="mailto:hello@piyuproducts.com"
                className="hover:text-primary transition-colors"
              >
                hello@piyuproducts.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-bold text-text-main dark:text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-3 justify-center sm:justify-start">
            <a
              href="https://www.facebook.com/sanipituwa/"
              aria-label="Facebook"
              className="size-10 rounded-full bg-gray-200 text-black flex items-center justify-center hover:scale-110 transition-transform duration-500"
            >
              <Facebook className="size-4" aria-hidden="true" />
            </a>

            <a
              href="https://youtube.com/@piyuproducts"
              aria-label="YouTube"
              className="size-10 rounded-full bg-gray-200 text-black flex items-center justify-center hover:scale-110 transition-transform duration-500"
            >
              <Youtube className="size-5" aria-hidden="true" />
            </a>

            <a
              href="https://wa.me/15551234567"
              aria-label="WhatsApp"
              className="size-10 rounded-full bg-gray-200 text-black flex items-center justify-center hover:scale-110 transition-transform duration-500"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto border-t border-gray-100 dark:border-white/10 mt-12 pt-8 text-center">
        <p className="text-xs text-text-muted dark:text-gray-500">
          © {new Date().getFullYear()} Piyu Products. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
