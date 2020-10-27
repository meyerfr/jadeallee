export default function changeSuite() {
  const allSuiteTabs = document.querySelectorAll('.suite-list th a');
  if (allSuiteTabs.length > 0) {
    allSuiteTabs.forEach((suiteTab) => {
      suiteTab.addEventListener('click', () => {
        let currentSuiteContainer = document.querySelector('.suite-container.active');
        let previousActiveSuiteTab = document.querySelector('.suite-list .active')
        // change Tabs
        previousActiveSuiteTab.classList.toggle('active');
        console.log(suiteTab.parentElement)
        suiteTab.parentElement.classList.add('active');
        // // change Suite Container
        // currentSuiteContainer.classList.remove('active');
        // let nextSuiteContainerName = suiteTab.firstElementChild.innerText;
        // document.getElementById(nextSuiteContainerName.toLowerCase()).classList.add('active');
        // // change Book button
        // document.querySelector('.suite-information-wrapper .name').innerText = nextSuiteContainerName
      })
    })

  }
}
