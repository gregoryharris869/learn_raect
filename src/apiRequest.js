const apiRequest = async (url = "", optionsObj = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw new Error("Please reload the app");
  } catch (err) {
    return err.message;
  }
};

export default apiRequest;
