import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Partner {
  name: string;
  logoUrl: string;
  sponsorship: string;
  link: string;
}

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.html',
  styleUrls: ['./partners.css']
})
export class Partners {
  isTableExpanded: boolean = false;

partners: Partner[] = [
    {
      name: 'Microsoft',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/732/732221.png',
      sponsorship: 'Platinum',
      link: 'View website'
    },
    {
      name: 'Apple, Inc.',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/0/747.png',
      sponsorship: 'Gold',
      link: 'View website'
    },
    {
      name: 'Amazon',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968202.png',
      sponsorship: 'Silver',
      link: 'View website'
    },
    {
      name: 'Google, Inc.',
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
      sponsorship: 'Bronze',
      link: 'View website'
    }
  ];

  toggleTable(): void {
    this.isTableExpanded = !this.isTableExpanded;
  }
}
