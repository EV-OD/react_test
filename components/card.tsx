type CardProps = {
  title: string,
  imgUrl: string,
  pageUrl: string
}

const Card = (props: CardProps) => {
  return (
    <div className="shadow-lg mt-3 ml-3 shadow-slate-200 flex flex-col p-2 bg-slate-100 w-[160px] justify-center items-center">
      <h2>{props.title}</h2>
      <img src={props.imgUrl} width={100} height={100} alt="image" />
      <a href={props.pageUrl}>Shop me</a>
    </div>
  )
}

export default Card;

