interface NoteCardProps {
    
}

export function NoteCard() {
  return (
    <button className="rounded-md bg-slate-800 text-left p-5 outline-none overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-line-400  ">
      <span className="text-sm font-medium  text-slate-300">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-300 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        veritatis minus ducimus deleniti at suscipit ipsam debitis nobis laborum
        praesentium, necessitatibus aliquam a expedita consequatur, atque
        maiores natus qui illo. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Veniam veritatis minus ducimus deleniti at suscipit
        ipsam debitis nobis laborum praesentium, necessitatibus aliquam a
        expedita consequatur, atque maiores natus qui illo.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/9"></div>
    </button>
  );
}
