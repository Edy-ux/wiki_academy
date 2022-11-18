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
  type SearchResult = {
    inline_videos: [
      {
        position: number;
        title: string;
        link: string;
        thumbnail: string;
        channel: string;
        date: string;
        platform: string;
        duration: string;
      }
    ];
  };
  