import { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '이성진',
  'birthday': '961106',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '이기철',
  'birthday': '561106',
  'gender': '남자',
  'job': '군인'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '김지수',
  'birthday': '001106',
  'gender': '여자',
  'job': '대학생'
}
]

class App extends Component {
  render() {
    return (
      <div>
   {
  customers.map(c => {
    return (
    <Customer
    key={c.key}
    id={c.id}
    image={c.image}
    name={c.name}
    birthday={c.birthday}
    gender={c.gender}
    job={c.job}
      />
      );
  })
   }
      </div>
  ); 
 }
}

export default App;
