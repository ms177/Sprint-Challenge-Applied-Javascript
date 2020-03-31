// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
  console.log('my tab data is', response.data)
});



function Tab(topic) {
    const tab = document.createElement("div");

    tab.classList.add("tab");
    
    tab.textContent=topic;
    const tabEntry = document.querySelector(".topics");
    tabEntry.appendChild(tab);

    return tab;
   
}


axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => { 
  Tab(response.data.topics[0]);
  Tab(response.data.topics[1]);
  Tab(response.data.topics[2]);
  Tab(response.data.topics[3]);
  Tab(response.data.topics[4]);
})