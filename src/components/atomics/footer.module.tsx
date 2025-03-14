export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-bold text-white p-7 text-center w-full h-20 flex justify-center items-center">
      <div className="div">
        <p> Enhancing Beauty Empowering You!</p>
      </div>
    </footer>
  );
}
