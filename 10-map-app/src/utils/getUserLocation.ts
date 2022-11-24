export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        res([coords.longitude, coords.latitude]);
      },
      (err) => {
        alert('No se pudo obtener geolocalización');
        console.log(err);
        rej();
      }
    );
  });
};
