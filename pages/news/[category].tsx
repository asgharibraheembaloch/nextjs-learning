function ArticleListByCategory({ articles, category }:any) {
    return (
      <>
        <h1>Showing news for category <i>{category}</i></h1>
        {articles.map((article:any) => {
          return (
            <div key={article.id}>
              <h2>
                {article.id} {article.title}
              </h2>
              <p>{article.description}</p>
              <hr />
            </div>
          )
        })}
      </>
    )
  }
  
  export default ArticleListByCategory
  
  export async function getServerSideProps(context:any) {
    const { params, req, res, query } = context
    const { category } = params
    const response = await fetch(
      `http://localhost:4000/news?category=${category}`
    )
    const data = await response.json()
  
    console.log(`Pre-rendering News Articles for category ${category}`)
    res.setHeader('Set-Cookie', ['name=Vishwas'])
    console.log(req.headers.cookie)
    console.log(query)
    return {
      props: {
        articles: data,
        category
      }
    }
  }