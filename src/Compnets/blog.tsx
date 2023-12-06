
interface blogprops{
    images:string;
    title1:string;
    title2:string;
    date:string;


}

const Blog: React.FC<blogprops> = ({ images,title1,title2,date }) => {
    return(
       <>
            <div className="contentblog">
                <img src={images} alt="" className="blog-img"/>
                <div className="h2text">
                <h2>{title1}</h2>
                <h2>{title2}</h2>
                </div>
                
            </div>

            
        </>
        
    )
}

export default Blog
