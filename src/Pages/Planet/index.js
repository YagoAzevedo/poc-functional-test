import { useEffect, useState } from "react";
import axios from "axios";
import Title from '../../Components/Title';
import { Container, Copyright } from './styles';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [copyright, setCopyright] = useState('');
  const [showMore, setShowMore] = useState(false);
  const apiKey = "ism0GFhyiPyyNkePZ5LGuuuL1ufpgwXzDsyxTXbh";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  useEffect(() => {
    axios.get(url).then(
      response => {
        setImageUrl(response.data.url);
        setTitle(response.data.title);
        setCopyright(response.data.copyright)
      }
    );
  }, []);

  return (
    <Container>
      <div>
        {
          imageUrl &&
            <img src={imageUrl} alt={`Picture of the day`} />
        }
      </div>
      <Title text={title} />

      { 
        showMore &&
         <Copyright>{copyright}</Copyright> 
      }

      <button onClick={() => setShowMore(!showMore)}>Show more</button>
    </Container>
  );
}

export default App;
