export type State = {
    errors?: {
      email?: string[];
      password?: string[];
      firstName?:string[] | null;
      lastName?:string[] | null
    //   status?: string[];
    };
    message?: string ;
  };