export interface Classmate {
    Class: string;
    Name: string;
    Number: string;
    Height: number;
    Weight: number;
    Gender?: string;
    Age?: number;
    Birthday?: Date;
    Address?: string;
    ContactNumber?: string;
    Email?: string;
    Grade?: number;
    FavoriteSubject?: string;
    BloodType?: string;
    EmergencyContact?: string;
}

export const data: Classmate[] = [
  { Class: 'A', Name: 'Alice', Number: '001', Height: 165, Weight: 55, Gender: 'Female', Age: 20, Birthday: new Date('2002-05-15'), Address: '123 Main St', ContactNumber: '123-456-7890', Email: 'alice@example.com', Grade: 3, FavoriteSubject: 'Math', BloodType: 'A', EmergencyContact: 'Bob (Brother)' },
  { Class: 'B', Name: 'Bob', Number: '002', Height: 175, Weight: 70, Gender: 'Male', Age: 21, Birthday: new Date('2001-08-22'), Address: '456 Oak St', ContactNumber: '987-654-3210', Email: 'bob@example.com', Grade: 4, FavoriteSubject: 'Science', BloodType: 'B', EmergencyContact: 'Alice (Sister)' },
  { Class: 'A', Name: 'Charlie', Number: '003', Height: 160, Weight: 50, Gender: 'Male', Age: 19, Birthday: new Date('2003-02-10'), Address: '789 Elm St', ContactNumber: '567-890-1234', Email: 'charlie@example.com', Grade: 2, FavoriteSubject: 'English', BloodType: 'O', EmergencyContact: 'David (Friend)' },
  { Class: 'B', Name: 'David', Number: '004', Height: 180, Weight: 75, Gender: 'Male', Age: 22, Birthday: new Date('2000-11-05'), Address: '321 Pine St', ContactNumber: '234-567-8901', Email: 'david@example.com', Grade: 5, FavoriteSubject: 'History', BloodType: 'AB', EmergencyContact: 'Charlie (Cousin)' },
  { Class: 'A', Name: 'Eva', Number: '005', Height: 170, Weight: 60, Gender: 'Female', Age: 20, Birthday: new Date('2002-09-18'), Address: '567 Cedar St', ContactNumber: '345-678-9012', Email: 'eva@example.com', Grade: 3, FavoriteSubject: 'Physics', BloodType: 'B', EmergencyContact: 'Frank (Neighbor)' },
  { Class: 'B', Name: 'Frank', Number: '006', Height: 185, Weight: 80, Gender: 'Male', Age: 23, Birthday: new Date('1999-04-30'), Address: '987 Birch St', ContactNumber: '876-543-2109', Email: 'frank@example.com', Grade: 6, FavoriteSubject: 'Chemistry', BloodType: 'A', EmergencyContact: 'Eva (Neighbor)' },
  { Class: 'A', Name: 'Grace', Number: '007', Height: 155, Weight: 45, Gender: 'Female', Age: 18, Birthday: new Date('2004-07-12'), Address: '234 Maple St', ContactNumber: '654-321-0987', Email: 'grace@example.com', Grade: 1, FavoriteSubject: 'Art', BloodType: 'O', EmergencyContact: 'Hank (Uncle)' },
  { Class: 'B', Name: 'Hank', Number: '008', Height: 190, Weight: 85, Gender: 'Male', Age: 24, Birthday: new Date('1998-01-25'), Address: '876 Walnut St', ContactNumber: '432-109-8765', Email: 'hank@example.com', Grade: 7, FavoriteSubject: 'Music', BloodType: 'AB', EmergencyContact: 'Grace (Niece)' },
  { Class: 'A', Name: 'Ivy', Number: '009', Height: 160, Weight: 55, Gender: 'Female', Age: 19, Birthday: new Date('2003-12-03'), Address: '345 Pineapple St', ContactNumber: '210-987-6543', Email: 'ivy@example.com', Grade: 2, FavoriteSubject: 'Biology', BloodType: 'A', EmergencyContact: 'Jack (Friend)' },
  { Class: 'B', Name: 'Jack', Number: '010', Height: 175, Weight: 70, Gender: 'Male', Age: 22, Birthday: new Date('2000-06-28'), Address: '543 Banana St', ContactNumber: '109-876-5432', Email: 'jack@example.com', Grade: 5, FavoriteSubject: 'Physical Education', BloodType: 'B', EmergencyContact: 'Ivy (Friend)' }
];
