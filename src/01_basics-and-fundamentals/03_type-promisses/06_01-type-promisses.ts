(()=>{
  interface ILukeSkywalker {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  }
  
  const fetchLukeSkywalker = async (): Promise<ILukeSkywalker> => {
    const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
      return res.json();
    });
  
    return data;
  };

  const logLukeSkywalker = async () => {
    const luke = await fetchLukeSkywalker();
    console.log(luke);
  }

  logLukeSkywalker();
})()
