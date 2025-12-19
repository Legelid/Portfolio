export function Footer() {
    return (
        <footer className="border-t border-yellow-300 bg-yellow-300 dark:border-black dark:bg-black mt-20 py-10 text-center text-sm text-black dark:text-white ">
            © {new Date().getFullYear()} TheBois. All rights reserved.
        </footer>
    );
}