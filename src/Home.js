import useFetch from "react-fetch-hook";
import SingleCard from "./SingleCard";
import "./Home.css"

export default function Home() {
    const { isLoading, data, error } = useFetch(
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
      );
      console.log(data)
      return (
        <div className="App">
          {isLoading && <div>A moment please...</div>}
          {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
          )}
          <div className="card-grid">
            {data &&
              data.map((card) => (

                <SingleCard
                id={card.id}
               title={card.title}
               thumbnail={card.thumbnail}
               card={card}
                  />
              ))}
         </div>
        </div>
      );
    }