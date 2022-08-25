import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INavData } from '../component/sidebar/sidebar-nav/sidebar-nav';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


   public navItemss: INavData[] = [
    {
      name: 'Home',
      url: '/home',
      icon: 'fa fa-home ',
      badge: {text: 'New', color: 'black'},
    },
    {
      name: 'Profile',
      url: '/pro',
      icon: 'fa fa-user-circle',
      children: [
        {
          name: 'My Profile',
          url:  '/profile',
          icon: 'fa fa-user-circle',
        },
        {
          name: 'Focus Board',
          url:  '/board',
          icon: 'fas fa-columns',
        },
        {
          name: 'Chat',
          url:  '/chat',
          icon: 'fas fa-comments',
        }
      ],
    },
    {
      name: 'My Network',
      url: '/net',
      icon: 'fas fa-project-diagram',
      children: [
        {
          name: 'Connections',
          url:  '/connection',
          icon: 'fas fa-user-friends',
        },
        {
          name: 'Groups',
          url:  '/group',
          icon: 'fas fa-columns',
        },
        {
          name: 'Events',
          url:  '/event',
          icon: 'fas fa-comments',
        },
        {
          name: 'Hashtags',
          url:  '/hashtags',
          icon: 'fas fa-comments',
        }
      ],
    },
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-tachometer-alt'
    },
    {
      name: 'Explore',
      icon: 'fas fa-search',
      children: [
        {
          name: 'Type of job',
          children:[
            {
              name: 'Full Time',
              badge: {text: '75', color: 'light'},
              type: 'checkbox',
            },
            {
              name: 'Gigs',
              badge: {text: '126', color: 'light'},
              type: 'checkbox',
            },
          ]
        },
        {
          name: 'Experience Level',
          children:[
            {
              name: 'Entry ',
              badge: {text: '75', color: 'light'},
              type: 'checkbox',
            },
            {
              name: 'Junior ',
              badge: {text: '75', color: 'light'},
              type: 'checkbox',
            },
            {
              name: 'Middle ',
              badge: {text: '75', color: 'light'},
              type: 'checkbox',
            },
          ]
        }
      ],
    },
  ]

    brandImage : any = {
      src: '../../assets/image/sidebar-logo.png',
      width: 150,
      height: 40,
      alt: 'CoreUI Logo'
    };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
