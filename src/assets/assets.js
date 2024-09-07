import add_icon from './add_icon.svg'
import admin_logo from './admin_logo.svg'
import appointment_icon from './appointment_icon.svg'
import cancel_icon from './cancel_icon.svg'
import doctor_icon from './doctor_icon.svg'
import home_icon from './home_icon.svg'
import people_icon from './people_icon.svg'
import upload_area from './upload_area.svg'
import list_icon from './list_icon.svg'
import tick_icon from './tick_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import patients_icon from './patients_icon.svg'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import profile from './profile.jpeg'
import group_profiles from './group_profiles.png'
import header_img from './header_img.png'
import arrow_icon from './arrow_icon.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Dermatologist from './Dermatologist.svg'
import Pediatricians from './Pediatricians.svg'
import Neurologist from './Neurologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import verified_icon from './verified_icon.svg'
import info_icon from './info_icon.svg'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import about_image from './about_image.png'
import contact_image from './contact_image.png'
import appointment_img from './appointment_img.png'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
// import profile from './profile.jpeg'

export const assets = {
    cross_icon,
    menu_icon,
    profile,
    contact_image,
    about_image,
    info_icon,
    verified_icon,
    appointment_img,
    arrow_icon,
    header_img,
    group_profiles,
    profile,
    dropdown_icon,
    logo,
    add_icon,
    admin_logo,
    appointment_icon,
    cancel_icon,
    doctor_icon,
    upload_area,
    home_icon,
    patients_icon,
    people_icon,
    list_icon,
    tick_icon,
    appointments_icon,
    earning_icon
}
export const specialityData=[
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]
export const doctors=[
    {
        _id: 'doc1',
        name: 'Dr Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '10 years',
        about: 'Dr. Richard James has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:50,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '8 years',
        about: 'Dr. Emily Larson has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:50,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '2 years',
        about: 'Dr. Sarah Patel has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:50,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '2 years',
        about: 'Dr. Christopher Lee has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:50,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 years',
        about: 'Dr. Jennifer Garcia has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:50,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '7 years',
        about: 'Dr. Andrew Williams has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:50,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '7 years',
        about: 'Dr. Christopher Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:50,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Dr. Timothy White has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:50,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '3 years',
        about: 'Dr. Ava Mitchell has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:50,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '6 years',
        about: 'Dr. Jeffrey King has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:50,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Dr. Zoe Kelly has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:50,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '8 years',
        about: 'Dr. Patrick Harris has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:50,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '2 years',
        about: 'Dr. Chloe Evans has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:50,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '3 years',
        about: 'Dr. Ryan Martinez has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:50,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '6 years',
        about: 'Dr. Amelia Hill has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:50,
        address:{
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
    }
    // {
    //     _id: 'doc15',
    //     name: 'Dr Richard James',
    //     image: doc15,
    //     speciality: 'Gynecologist',
    //     degree: 'MBBS',
    //     experience: '10 years',
    //     about: 'Dr. Richard James has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    //     fees:50,
    //     address:{
    //         line1: '17th Cross, Richmond',
    //         line2: 'Circle, Ring Road, London'
    //     },
    // }
]
