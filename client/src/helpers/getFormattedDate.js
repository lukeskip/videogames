const getFormattedDate = (release) => {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const releaseDate = new Date(release + "T00:00:00");
  const day = releaseDate.getDate();
  const month = releaseDate.getMonth();
  const year = releaseDate.getFullYear();

  return `${day} de ${months[month]} de ${year}`;
};
export default getFormattedDate;
