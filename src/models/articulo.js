class Articulo {
    constructor(id, title, body, userId) {
      this.id = id;
      this.title = title;
      this.body = body;
      this.userId = userId;
    }
  
    static fromObject(obj) {
      const { id, title, body, userId } = obj;
      return new Articulo(id, title, body, userId);
    }
  }