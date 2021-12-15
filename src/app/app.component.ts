import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menton-names';
  getMentionName = '';
  getSelectedValue = '';
  getSelectedUserName = '';

  items: string[] = ['Gina Williams', 'Jake Williams', 'Jamie John', 'Jeff Stewart' , 'Paula M. Keith'];

  object = [];
  getItems: any[] = [
    {
      username: 'gina',
      name: 'Gina Williams'
    },
    {
      username: 'jake',
      name: 'Jake Williams'
    },
    {
      username: 'jamie',
      name: 'Jamie John',
    },
    {
      username: 'jeff',
      name: 'Jeff Stewart',
    },
    {
      username: 'paula',
      name: 'Paula M. Keith',
    },
  ];
  isSelected = false;
  mentionConfig = {
    mentions: [
      {
        items: this.items,
        triggerChar: '@',
        maxItems: 6,
        disableSort: false,
        allowSpace: true,
        mentionSelect: this.onMentionSelect,
      },
      {
        items: ['Red', 'Yellow', 'Green'],
        triggerChar: '#',
        labelKey: 'name',
        maxItems: 6,
        disableSort: false,
        dropUp: true,
        allowSpace: true,
        mentionSelect: this.onMentionSelect,
      },
    ],
  };
  mentionConfig2 = {
    items: this.getItems,
    labelKey: 'name',
    mentionSelect: this.onMentionSelectByName,
  };
  closed(event: Event): void {
    if (this.getMentionName !== '@'){
      this.updateClass();
    }
  }
  onMentionSelect(selection: any): string {
    this.getMentionName = selection.label;
    return selection.label;
  }
  updateClass(): void {
    this.isSelected = true;
  }
  onMentionSelectByName(selection: any): string {
    return selection.username;
  }
  resetNote(): void {
    this.isSelected = false;
    this.getMentionName = '';
  }

}
