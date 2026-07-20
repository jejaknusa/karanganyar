interface TimelineProps {}
export default function Timeline({}: TimelineProps) {
  return (
    <div className="flex aspect-4/5 flex-col justify-center p-8 relative gap-4">
      <div className="rounded-full bg-primary size-18 absolute top-8 left-8"></div>
      <h2>1948</h2>
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui tenetur
        ratione iusto voluptate aperiam, voluptatum ex dolorem odio et placeat
        numquam, porro ad reprehenderit quo.
      </p>
    </div>
  );
}
