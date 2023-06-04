import { Map, AccountCircle, BusinessCenter, DeviceHub, Home, Brightness7, AccountBalance, FitnessCenter, PsychologyAlt, Carpenter } from '@mui/icons-material'
import React from 'react'

export const NavOptions = [
    {name: 'Home', icon:<Home/>},
    {name: 'Red', icon:<Brightness7/>},
    {name: 'Yellow', icon: <DeviceHub/>},
    {name: 'Blue', icon: <BusinessCenter/>}
]

export const ModuleNav =[
    {name: 'General', icon:<AccountBalance/>},
    {name: 'Authors', icon:<AccountCircle/>},
    {name: 'Location', icon:<Map/>}
]

export const RedModuleNav =[
    {class:'Brute-Force', name: 'Brute Force', icon: <FitnessCenter/>},
    {class:'Brainstorm', name: 'Brainstorm', icon: <PsychologyAlt/>},
    {class:'Tools', name: 'Tools', icon: <Carpenter/>}
]

export const authors =[
    {name: 'Me', icon:'asset/img/Me_Logo.PNG'},
    {name: 'Chairbender', icon:'asset/img/Chairbender_Logo.PNG'},
    {name: 'Comfortor', icon:'asset/img/Comfortor_Logo.PNG'},
    {name: 'TE', icon:'asset/img/TE_Logo.png'},
    {name: 'Sponsor', icon:'asset/img/Sponsor_Logo.PNG'},
    {name: 'Sis', icon:'asset/img/Sis_Logo.png'},
]

export const honorable =[
    {class:'Rigby565', name: 'Rigby565', icon:'asset/img/Rigby565_Logo.png', quote:"Its ok if you need to change, i will be there always!"},
    {class:'Thinh-LE', name: 'Lucifer', icon:'asset/img/Thinh-Le_Logo.png', quote:"Don't gamble, it will kill you one day"},
    {class:'Tien-Dat', name: 'Pham Tien Dat', icon:'asset/img/PhamTienDat_Logo.png', quote:"If your code works, don't ever touch it again."},
    {class:'Nhat-Truong', name: 'Cielline', icon:'asset/img/Nhat-Truong_Logo.png', quote:"if you think it's good, it's good"},
    {class:'Fokun', name: 'Fokun', icon:'asset/img/Fokun-Logo.png', quote:"if you think it's good, it's good. To live , do as you wish. To exist , do as people desire"},
    {class:'Clown', name: 'C.H', icon:'asset/img/Clown-Logo.png', quote:"You are just as scared as we are"},
]

export const Background =[
    {name:'Trinity', background:'asset/img/Trinity_Background.jpg'},
    {name:'Red', background:'asset/img/Red-Background.jpg'},
    {name:'Camping', background:'asset/img/Camping_Background.jpg'},
]

export const Images = [
    {id: '0', src: 'asset/img/Red_Banner.jpg'},
    {id: '1', src: 'asset/img/Yellow_Banner.jpg'},
    {id: '2', src: 'asset/img/Blue_Banner.jpg'},
]
export const RedItems =[
        {id: 'Brute-Force', img:'asset/img/Heal-Items.PNG', name:'Plantgrowth Heal', info:"Being a Plantgrowth has its upside, being able to heal from any wound will keep you in battle for much longer than your opponents if you don't let yourself stuck in a choke point"},
        {id: 'Brute-Force', img:'asset/img/Armor-Items.PNG', name:'Fungus Armor', info:"Tanking every hit being thrown at you, generate armor from fungus under your skin to soften the blows"},
        {id: 'Brute-Force', img:'asset/img/Grow-Items.PNG', name:'Fungus Growth', info:"Intimadate your foes, grow to an imaginable size, like a cat pushing up its back"},
        {id: 'Brute-Force', img:'asset/img/SoulImpact-Items.PNG', name:'Soul Impact', info:"Developed by the finest mind for the basic of combat, focus your soul on a focal point and strike to deal a massive ammount of damage"},
        {id: 'Brute-Force', img:'asset/img/HeadTrauma-Items.PNG', name:'Head Trauma', info:"Being hit in the head a lot can make you sleepy but your will power is still there, use it to push yourself further and keep fighting"},

        {id: 'Brainstorm', img:'asset/img/Infected-Items.PNG', name:'Infection', info:"Turn your foes tissues into fungus and mushroom, instantly incapacitate them if you use it right"},
        {id: 'Brainstorm', img:'asset/img/Signal-Items.PNG', name:'Fungus Message', info:"Your network of fungus can be a valuable source of information on the battlefield, let them send messages from your comrades and stay informative"},
        {id: 'Brainstorm', img:'asset/img/SoulSensor-Items.PNG', name:'Soul Sensor', info:"Burst out small soul field, letting your soul knows exactly what's happening around you, preventing cheap shots or someone sneaking up behind you"},
        {id: 'Brainstorm', img:'asset/img/Spore-Items.PNG', name:'Spore Gas', info:"Stay hidden by generating a small area of spore, you can keep track of everyone insde of that same spore cloud"},
        {id: 'Brainstorm', img:'asset/img/Shifting-Items.PNG', name:'Body Shifting', info:"When the going gets tough, you need to be able to swiftly get out of the fight. Shift your body and move out the situation as fast as you can, your foes will have a hard time catching you"},

        {id: 'Tools', img:'asset/img/Scythe-Items.PNG', name:'Death Scythe', info:"The weapon created from the Deaths, used by every single one, by pass any physical defense and imortality. You hit them, it means you hit them"},
        {id: 'Tools', img:'asset/img/Machete-Items.PNG', name:'Maraka Machete', info:"A machete with the summoning mark of the Maraka Tree, an everlasting burning tree, a tip to the scale in battle. With the Bind of Schrufie, it will be hard for you to lose the weapon in battle"},
        {id: 'Tools', img:'asset/img/MagmaSword-Items.PNG', name:'Magma Dragon Heavy Sword', info:"A sword with the soul of a Magma Dragon, be nice it and it will be nice to you. He'll try keep the foes off your back"},
        {id: 'Tools', img:'asset/img/StrongMushroom-Items.PNG', name:'Muscle Shroom', info:"Need a little bit of extra strength? Try to eat some Muscle Shroom developed by the Shroom, this mushroom is the key to win in any fight if your body can handle the stress"},
        {id: 'Tools', img:'asset/img/FastMushroom-Items.PNG', name:'Reflex Mushroom', info:"Wanna be fast? Pop in the Reflex Mushroom and zoom around the battlefield. Just remember to retreat before it runs out"},
        {id: 'Tools', img:'asset/img/Halo-Items.PNG', name:"Death's Halo", info:"You shouldn't be reading this"}
]

export const RedMessages=[
    {id:"Default", header:"You will die", content:"You need to accept what you are and know what consequences your actions bring. Do what you want but you can't run away from the truth."},
    {id:"Brute-Force", header:"Run into a wall", content:"You hit your head into a wall. You can punch, kick and scream all you want. You will have to think about how to get through that wall. Fighting can only get you so far."},
    {id:"Brainstorm", header:"You tried to think", content:"You realize you are dumb, illogical and kinda creative. You give people ideas that you can't do on your own. You are happy."},
    {id:"Tools", header:"The right one", content:"You'll need all the tools that you can get, find any edge that you can see. They are unforgiving, they are not her."}
]

export const locationinfo=[
    {id:'1', message:'Mail: Purification123@hotmail.com'},
    {id:'2', message:"Address: 7°22'42.1'N 62°32'08.4"},
    {id:'3', message:'Phone: 1043848517'},
]

export const locationlogo=[
    {name:'Instagram', img:'asset/img/Instagram.png'},
    {name:'Twitter', img:'asset/img/Twitter.png'},
    {name:'Facebook', img:'asset/img/Facebook.png'}
]

export const RandomMessage = [
    {id:'1', Message:'Look up and see nothing'},
    {id:'2', Message:'You are not a saint, just be cool'},
    {id:'3', Message:'Find the people that respect you'},
    {id:'4', Message:'Do not let yourself be fueled with anger and fear'},
    {id:'5', Message:'Stop hurting yourself'},
    {id:'6', Message:'The door is priceless'},
    {id:'7', Message:'We all miss someone'},
    {id:'8', Message:'There is a goose on your shoulder'},
    {id:'9', Message:'Everything but the sponge'},
    {id:'10', Message:'Bells in the distance'},
    {id:'11', Message:'It is raining somewhere'},
    {id:'12', Message:'The roof of the world'},
    {id:'13', Message:'The cat must have the answer'},
    {id:'14', Message:'Not today, come back tomorrow'},
    {id:'15', Message:'The nuggets are chiken'},
    {id:'16', Message:'Chocolate, it is not that good'},
    {id:'17', Message:'Read Moonlight Garden'},
    {id:'18', Message:'.'},
    {id:'19', Message:'How does it feel to have every bit of your life drained out of your body by your nightmare?'},
    {id:'20', Message:'Do not care bout the opinion others... I mean it'},
    {id:'21', Message:"Its ok if you need to change, i will be there always!"},
    {id:'22', Message:"Don't gamble, it will kill you one day"},
    {id:'23', Message:"If your code works, don't ever touch it again."},
    {id:'24', Message:"if you think it's good, it's good"}
]
