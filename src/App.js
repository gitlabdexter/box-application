 import { Products } from './components/products';
 import contents from './contentData/content';
 import siteOptions from './contentData/siteOption';
 import CoverPage from './components/cover_page';
 import FooterDetails from './components/footer_details';

 export default function App() {
     return(
        <>
        {siteOptions.map(siteOptions => (
                    <CoverPage 
                        key={siteOptions.id}
                        image={siteOptions.image}
                        siteName={siteOptions.siteName}
                        description={siteOptions.description}
                        siteLink={siteOptions.siteLink}
                    />
                ))}
            <div className='AppContainer'>
                {contents.map(contents => (
                    <Products 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        description={contents.description}
                        appLink={contents.appLink}
                        timeLeft={contents.timeLeft}
                        rating={contents.rating}
                    />
                ))}
            </div>

            <FooterDetails
            key={siteOptions.id}
            siteName={siteOptions.siteName}/>
            </>
     )
 }