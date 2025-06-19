export default function Footer() {
  return (
    <footer className="w-full py-6 border-t mt-10 bg-background bg-opacity-60 backdrop-blur-md">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} SkillMatch. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
