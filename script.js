let url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"
let req = new XMLHttpRequest()

let baseTemp
let values = []

let xScale
let yScale

let width = 1200
let height = 600
let padding = 60

let canvas = d3.select('#canvas')
canvas.attr('width', width)
canvas.attr('height', height)

let generateScales = () => {

    xScale = d3.scaleLinear()
               .range([padding, width-padding])

    yScale = d3.scaleTime()
               .range([padding, height-padding])


}

let drawCells = () => {

}

let drawAxes = () => {

    let xAxis = d3.axisBottom(xScale)

    let yAxis = d3.axisLeft(yScale)

    canvas.append("g")
          .call(xAxis)
          .attr("id", "x-axis")
          .attr("transform", "translate(0, " + (height-padding) + ")")

    canvas.append("g")
          .call(yAxis)
          .attr("id", "y-axis")
          .attr("transform", "translate(" + padding + ", 0)")
          
    
    
}

req.open('GET', url, true)
req.onload = () => {
    let object = JSON.parse(req.responseText)
    baseTemp = object['baseTemperature']
    values = object['monthlyVariance']
    console.log(baseTemp)
    console.log(values)
    generateScales()
    drawCells()
    drawAxes()
}
req.send()