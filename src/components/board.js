import React from 'react';
import './board.css';
import List from './list'


const Info = [
    {
        img : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Sofia Cooper", birthday : "11-16"
    },
    {
        img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Miller Wright", birthday : "11-20"
    },
    {
        img : "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Tara Kelly", birthday : "11-17"
    },
    {
      img : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Freddie Watson", birthday : "12-15"
    },
    {
      img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Brianna Baker", birthday : "12-05"
    },
    {
      img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Brad Myers", birthday : "12-28"
    }
  ]

export default function board() {
  return (
      <main id='site-main'>
          <h1 className="text-dark title">Birthday Remainder</h1>

          <div className="board">
                <List info={Today(Info)}></List>
                <h2 className='upcoming text-dark'>Upcoming</h2>
                <List info={Upcoming(Info, 14)} upcoming={true}></List>
          </div>
      </main>
  );
}

function Today(person){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let filter = person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();

        return currentDay === day && currentMonth === month;
    })
    return filter;
}
// function Today(person){
//     let currentDay = new Date().getDate();
//     let currentMonth = new Date().getMonth();

//     let filter = person.filter(data => {
//         let day = new Date(data.birthday).getDate();
//         let month = new Date(data.birthday).getMonth();

//         return currentDay === day && currentMonth === month;
//     })
//     return filter;
// }


// upcoming birthdays
// function Upcoming(person, toMonth){
//     let currentMonth = new Date().getMonth();
//     let currentDay = new Date().getDate();

//     let filter =person.filter(data => {
//         let month = new Date(data.birthday).getMonth();
//         let day = new Date(data.birthday).getDate();

//         if (currentDay === day) return null;
//         return month >= currentMonth && month <= currentMonth + toMonth;
//     })

//     return filter;

// }

function Upcoming(person, toDays) {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed
    let currentDay = currentDate.getDate();

    let filter = person.filter(data => {
        let birthday = new Date(data.birthday);
        let birthdayMonth = birthday.getMonth() + 1; // Months are zero-indexed
        let birthdayDay = birthday.getDate();

        // Calculate the difference in days
        let monthDiff = birthdayMonth - currentMonth;
        let dayDiff = birthdayDay - currentDay;

        // Adjust for negative differences (birthdays in the next year)
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            monthDiff += 12; // Assuming there are 12 months in a year
        }

        let totalDaysDiff = monthDiff * 30 + dayDiff; // Assuming an average month length of 30 days

        return totalDaysDiff > 0 && totalDaysDiff <= toDays;
    });

    // Sort the filtered array by birthday in ascending order
    filter.sort((a, b) => {
        let dateA = new Date(a.birthday);
        let dateB = new Date(b.birthday);
        return dateA - dateB;
    });

    return filter;
}

