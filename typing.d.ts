export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  
  };

  export type Search = {
    params: {
      searchItem: string;
    };
   
  };

  export type PageProps = {
    params: {
      todoId: string;
    };
  };