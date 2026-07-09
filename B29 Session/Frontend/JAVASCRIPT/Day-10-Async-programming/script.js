async function taskComplete() {
  try {
    const resPosts = await fetch(
      "https://api-mockforge.onrender.com/api/databases/69eb186bc86c83e5ed05a54a/resources/contacts",
    );
    if (!resPosts.ok) {
      throw new Error("failed to run");
    }
    const postData = await resPosts.json(); // JSON->Object
    

    for(let value of postData){
        console.log(value.contactName)
    }
  } catch (error) {
    console.log(error);
  }
}

taskComplete();
