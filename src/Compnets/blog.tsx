
interface blogprops{
    images:string;
    title1:string;
    title2:string;
    date:string;


}
alert("This website is not responsive for mobile application right now")
const Blog: React.FC<blogprops> = ({ images,title1,title2,date }) => {
    return(
       <>
            <div className="contentblog">
                 <img src={images} alt="" className="blog-img"/>
                <div className="h2text">
                <h1>{title1}</h1>
                <h1 className="highlight">{title2}</h1>
                <p className="dateitem">{date}</p>

                </div>
                
            </div>

            
        </>
        
    )
}

export default Blog
