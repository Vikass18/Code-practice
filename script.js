async function getWeather(city) {
  try {
    let apikey = `fbbc8e639866793adea722dcebc587ea`;
    let raw = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );
    if (!raw.ok) {
      throw new Error("city not found, try something else.");
    }
    let realdata = await raw.json();
    console.log(realdata);
  } catch (err) {
    console.log(err.message);
  }
}

getWeather("varanasi");
