- debounce gdje se moze 
- event delegation 
- bug sa user-id  - rijesio sam sessionStoragoem ali nije bajno
- ostale scheme (fingerboard, strenght)
- cookies
- logout delete cookie 
- debonce login, logout, any input
- novi dizajn
- images logos webpack


- https://blog.bitsrc.io/10-ways-to-optimize-your-react-apps-performance-e5e437c9abce
- https://dmitripavlutin.com/react-usestate-hook-guide/
- https://medium.com/@infinitypaul/reactjs-useeffect-usecallback-simplified-91e69fb0e7a3
- https://dmitripavlutin.com/use-react-memo-wisely/ 

Zabiljeske renderiranje
1. slucaj: na reload bez child elemenata u Climbing komponenti rendera se 2 PUTA 
2. slucaj: kad prelazim iz komponente u komponentu bez child elemenata u Climbnig  rendera se 1 PUT
3. slucaj: na reload sa data fetchom sa child elementima U Climbing rendera se 3 PUTA
4. slucaj: kad prelazim iz komponente u komponentu sa child elemenatima u Climbing  rendera se 2 PUTA
5. 


  // const data = useDataApi(
  //   "http://localhost:8080/api/climbing/route",
  //   setIsUpdatedFromDatabase,

  //   isUpdatedFromDatabase
  // );

  // console.log("isUpdatedFromDatabase", isUpdatedFromDatabase);

  // const data = useDataFromMongo("http://localhost:8080/api/climbing/route");
  // console.log(data);
  // const renders = React.useRef(1);

  // console.log("react", data);

  // console.log("isUpdatedFromDatabase", isUpdatedFromDatabase);

  // console.log(isLoading);
  // const routes = useDataFromMongo(
  //   "http://localhost:8080/api/climbing/route",
  //   setIsLoading,
  //   isUpdatedFromDatase,
  //   setIsUpdatedFromDatabase
  // );

  export const useDataFromMongo = url => {
  const [routesMongo, setRoutesMongo] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url, { withCredentials: true });
        setRoutesMongo(res.data);
        // setIsLoadingHook(true);
        // setIsReload(false);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [url]);
  // isUpdated, setIsLoadingHook, setIsReload
  return routesMongo;
};