


const FooterLInk = ({FooterLink}) => {
   
  return (
    <div  className=''>
      {
        FooterLink.map((links) => {
            return <li key={links.id}
            className=' cursor-pointer transition-all duration-300
             hover:translate-x-[2px]'
            >
                <a href="#" className=" mt-3">{links.name}</a>
            </li>
        })
      }
    </div>
  )
}

export default FooterLInk
