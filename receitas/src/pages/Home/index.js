import { useEffect, useState} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

// URL DA API: /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

function Home(){
  const [receitas, setReceitas] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{

    async function loadReceitas(){
      const response = await api.get("movie/now_playing", {
        params:{
         api_key: "28fc232cc001c31e8a031f419d0a14ca",
         language: "pt-BR",
         page: 1,
        }
      })

      //console.log(response.data.results.slice(0, 10));
      setReceitas(response.data.results.slice(0, 100))
      setLoading(false);

    }

    loadReceitas();

  }, [])



  if(loading){
    return(
      <div className="loading">
        <h2>Carregando Receitas...</h2>
      </div>
    )
  }

  return(
    <div className="container">
      <div className="lista-receitas">
        {receitas.map((receita) => {
          return(
            <div className="recipes">
                {recipes.map(recipe => (
                <Recipe
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    //calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    //ingredients={recipe.recipe.ingredients}
                />
        
                ))}
            </div>
            /*<article key={receita.id}>
              <strong>{receita.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${receita.poster_path}`} alt={receita.title} />
              <Link to={`/receita/${receita.id}`}>Acessar</Link>
            </article>*/
          )
        })}
      </div>
    </div>
  )
}

export default Home;