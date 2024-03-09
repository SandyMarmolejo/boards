class ArticuloService {
  async GetArticulos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error('Error al obtener las categorias');
    }

    const articulos = await response.json();
    return articulos.map(articulo => new Articulo(articulo.id, articulo.title, articulo.body, articulo.userId));
  }

  async GetArticuloById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
      throw new Error('Error al obtener la categoria');
    }

    const articulo = await response.json();
    return new Articulo(articulo.id, articulo.title, articulo.body, articulo.userId);
  }

  async CrearArticulo(articulo) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: articulo.title,
        body: articulo.body,
        userId: articulo.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8', //esto sirve para indicar que el body es json, y utf-8 es 
        //el encoding casi universal, para soportar caracteres y letras universales
      },
    });

    if (!response.ok) {
      throw new Error('Error al crear articulo');
    }

    const articuloCreado = await response.json();
    return new Articulo(articuloCreado.id, articuloCreado.title, articuloCreado.body, articuloCreado.userId);
  }

  async ActualizarArticulo(articulo) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${articulo.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: articulo.title,
        body: articulo.body,
        userId: articulo.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8', //esto sirve para indicar que el body es json, y utf-8 es 
        //el encoding casi universal, para soportar caracteres y letras universales
      },
    });

    if (!response.ok) {
      throw new Error('Error al actualizar articulo');
    }

    const articuloActualizado = await response.json();
    return new Articulo(articuloActualizado.id, articuloActualizado.title, articuloActualizado.body, articuloActualizado.userId);
  }

  async ActualizarTituloArticulo(titulo) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${articulo.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: articulo.title
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8', //esto sirve para indicar que el body es json, y utf-8 es 
        //el encoding casi universal, para soportar caracteres y letras universales
      },
    });

    if (!response.ok) {
      throw new Error('Error al actualizar titulo de articulo');
    }

    const articuloActualizado = await response.json();
    return new Articulo(articuloActualizado.id, articuloActualizado.title, articuloActualizado.body, articuloActualizado.userId);
  }

  async EliminarArticulo(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${articulo.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8', //esto sirve para indicar que el body es json, y utf-8 es 
        //el encoding casi universal, para soportar caracteres y letras universales
      },
    });

    if (!response.ok) {
      throw new Error('Error al eliminar articulo');
    }
  }
}

export default ArticuloService;