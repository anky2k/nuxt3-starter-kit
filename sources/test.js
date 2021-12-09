const wait = delay => new Promise((resolve) => setTimeout(() => resolve(true), delay));

export async function getSampleData() {
  await wait(3000);
  return Promise.resolve({
      items: [
          {
            thumbnail: 'https://picsum.photos/320/200',
            avatar: 'https://picsum.photos/50/50',
            bgColor: '#BCD1FF',
            tag: 'PRODUCTIVITY',
            date: '3 days ago',
            title: '7 Skills of Highly Effective Programmers',
            desc: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven...',
            author: 'Glen Williams',
          },
        ]
    });
}