import { Course, FlyweightFactory } from './01_flyweight-pattern';

describe('Course', () => {
  test('stores and retrieves course data correctly', () => {
    const courseData = {
      title: 'Design Patterns in JavaScript',
      user: 'JohnDoe',
      completed: true,
    };
    const course = new Course(courseData);

    expect(course.getTitle).toBe(courseData.title);
    expect(course.user).toBe(courseData.user);
    expect(course.completed).toBe(courseData.completed);
  });

  test('FlyweightFactory reuses flyweight objects for the same user and completion status', () => {
    const user = 'JaneDoe';
    const completed = false;

    const flyweight1 = FlyweightFactory.get(user, completed);
    const flyweight2 = FlyweightFactory.get(user, completed);

    expect(flyweight1).toBe(flyweight2);
  });

  test('FlyweightFactory creates new flyweight objects for different users or completion statuses', () => {
    const user1 = 'User1';
    const user2 = 'User2';
    const completed = true;

    const flyweight1 = FlyweightFactory.get(user1, completed);
    const flyweight2 = FlyweightFactory.get(user2, completed);
    const flyweight3 = FlyweightFactory.get(user1, !completed);

    expect(flyweight1).not.toBe(flyweight2);
    expect(flyweight1).not.toBe(flyweight3);
    expect(flyweight2).not.toBe(flyweight3);
  });
});
