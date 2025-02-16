const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
  }

const Part = (props) => {
  console.log('This is running' + props)
  return(
    <div>
      <p>
      {props.partNumber} {props.exerciseCount}
      </p>
    </div>
  )
  }

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Part partNumber={props.part1} exerciseCount={props.exercises1} />
      <Part partNumber={props.part2} exerciseCount={props.exercises2} />
      <Part partNumber={props.part3} exerciseCount={props.exercises3} />
    </div>
  )
  }

const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>
        Total number of courses {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )
  }

const App =() => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2 = {part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App

// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>Hello {props.name}, you are {props.age} years old.</p>
//     </div>
//   )
// }

// const Footer = () => {
//   return (
//     <>
//       greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
//     </>
//   )
// }

// const App = () => {
//   const friends = [
//     { name:'Peter', age: 4},
//     { name:'Paul', age: 27}
//   ]
//   return (
//     <div>
//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>
//     </div>
//   )
// }

// export default App