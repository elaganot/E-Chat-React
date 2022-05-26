import AudioMessage from '../AudioMessage/AudioMessage';

const Contacts = [
    {
        userName: 'eden', password: 'a123456', name: 'Eden Hamami', image: 'eden.jpeg', myFriends: [
            { image: 'Ela.jpeg', name: 'Ela Ganot', messages:[{ message: 'Ela, look what I made us', timestamp: '19:20', mine: true},
            {message: <video className="video" controls="controls"> <source src={'cute.MP4'} className="video" type="video/mp4" /></video>, timestamp: '19:23', mine: true},
             {message: <AudioMessage audioURL={'eze_hamud.M4A'}  />, timestamp: '19:24', mine: false},
             { message: 'look at my new facemask', timestamp: '19:25', mine: true},
             {message: <img src={'eden.jpeg'} className="image"></img>, timestamp: '19:25', mine: true}]  },

            { image: 'kim.jpeg', name: 'Kim Kardashian', messages: [{message: 'Eden you are my hero', timestamp: '14:00', mine: false}, {message: 'How did you get this phone number??', timestamp: '18:00', mine: true}] },
        ]
    },
    {
        userName: 'Ela123', password: 'a123456', name: 'Ela Ganot', image: 'ela.jpeg', myFriends: [
            { image: 'eden.jpeg', name: 'Eden Hamami', messages: [{ message: 'Ela, look what I made us', timestamp: '19:20', mine: false},
              {message: <video className="video" controls="controls"> <source src={'cute.MP4'} className="video" type="video/mp4" /></video>, timestamp: '19:23', mine: false},
               {message: <AudioMessage audioURL={'eze_hamud.M4A'}  />, timestamp: '19:24', mine: true},
               { message: 'look at my new facemask', timestamp: '19:25', mine: false},
               {message: <img src={'eden.jpeg'} className="image"></img>, timestamp: '19:25', mine: false}] },
            { image: 'heli.jpeg', name: 'Heli Maman', messages: [{ message: 'time to drink water!!', timestamp: '11:50', mine: false}, { message: 'I only drink diet coke heli ', timestamp: '11:51', mine: true}] },
            { image: 'kim.jpeg', name: 'Kim Kardashian', messages: [{message: 'I got up for Pilates', timestamp: '6:00', mine: false}, {message: <img src={'kim_pilates.jpg'} className="image"></img>, timestamp: '6:01', mine: false}, {message: 'Great job kimi', timestamp: '6:02', mine: true}] },
            { image: 'orna.jpeg', name: 'Orna Banay', messages: [{message: 'husha ksil!', timestamp: '12:30', mine: false}, {message: <AudioMessage audioURL={'orna_recording.M4A'}  />, timestamp: '12:34', mine: true}, {message: 'oof!', timestamp: '12:35', mine: false}] }
        ]
    },
    {
        userName: 'Kim2022', password: 'a123456', name: 'Kim Kardashian', image: 'kim.jpeg', myFriends: [
            { image: 'Ela.jpeg', name: 'Ela Ganot', messages:[{message: 'I got up for Pilates', timestamp: '6:00', mine: true}, {message: <img src={'kim_pilates.jpg'} className="image"></img>, timestamp: '6:01', mine: true}, {message: 'Great job kimi', timestamp: '6:02', mine: false}] },
            { image: 'eden.jpeg', name: 'Eden Hamami', messages: [{message: 'Eden you are my hero', timestamp: '14:00', mine: true}, {message: 'How did you get this phone number??', timestamp: '18:00', mine: false}] }
        ]
    },
    {
        userName: 'heli123', password: 'a123456', name: 'Heli Maman', image:  'heli.jpeg', myFriends: [
            { image: 'Ela.jpeg', name: 'Ela Ganot', messages:[{ message: 'time to drink water!!', timestamp: '11:50', mine: true}, { message: 'I only drink diet coke heli ', timestamp: '11:51', mine: false}] },
        ]
    },
    {
        userName: 'orna123', password: 'a123456', name: 'Orna Banay', image:  'orna.jpeg', myFriends: [
            { image: 'Ela.jpeg', name: 'Ela Ganot', messages:[{message: 'husha ksil!', timestamp: '12:30', mine: true}, {message: <AudioMessage audioURL={'orna_recording.M4A'}  />, timestamp: '12:34', mine: false}, {message: 'oof!', timestamp: '12:35', mine: true}] },
        ]
    }
];


export default Contacts;
