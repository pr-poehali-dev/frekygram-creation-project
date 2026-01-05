import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('chats');
  const [selectedChat, setSelectedChat] = useState<number | null>(1);

  const chats = [
    {
      id: 1,
      name: 'Александр Петров',
      avatar: '👨‍💼',
      lastMessage: 'Привет! Как дела?',
      time: '14:23',
      unread: 3,
      online: true,
      premium: true,
    },
    {
      id: 2,
      name: 'Мария Иванова',
      avatar: '👩‍🎨',
      lastMessage: 'Отправила файлы',
      time: '13:45',
      unread: 0,
      online: true,
      premium: false,
    },
    {
      id: 3,
      name: 'Команда Проекта',
      avatar: '👥',
      lastMessage: 'Встреча в 15:00',
      time: 'Вчера',
      unread: 12,
      online: false,
      premium: false,
    },
    {
      id: 4,
      name: 'Анна Смирнова',
      avatar: '👩‍💻',
      lastMessage: 'Посмотри это видео',
      time: 'Вчера',
      unread: 0,
      online: false,
      premium: true,
    },
  ];

  const stories = [
    { id: 1, name: 'Иван', avatar: '🎭', viewed: false },
    { id: 2, name: 'Елена', avatar: '🌸', viewed: false },
    { id: 3, name: 'Дмитрий', avatar: '🎮', viewed: true },
    { id: 4, name: 'София', avatar: '🎨', viewed: false },
    { id: 5, name: 'Максим', avatar: '⚡', viewed: true },
  ];

  const calls = [
    {
      id: 1,
      name: 'Александр Петров',
      avatar: '👨‍💼',
      type: 'incoming',
      time: '14:23',
      duration: '12:34',
    },
    {
      id: 2,
      name: 'Мария Иванова',
      avatar: '👩‍🎨',
      type: 'outgoing',
      time: '13:10',
      duration: '5:42',
    },
    {
      id: 3,
      name: 'Команда Проекта',
      avatar: '👥',
      type: 'missed',
      time: 'Вчера',
      duration: null,
    },
  ];

  const contacts = [
    { id: 1, name: 'Александр Петров', avatar: '👨‍💼', phone: '+7 999 123-45-67', online: true },
    { id: 2, name: 'Мария Иванова', avatar: '👩‍🎨', phone: '+7 999 234-56-78', online: true },
    { id: 3, name: 'Анна Смирнова', avatar: '👩‍💻', phone: '+7 999 345-67-89', online: false },
    { id: 4, name: 'Иван Козлов', avatar: '🎭', phone: '+7 999 456-78-90', online: false },
  ];

  const messages = [
    { id: 1, text: 'Привет! Как дела?', sender: 'them', time: '14:20', reactions: ['❤️', '👍'] },
    { id: 2, text: 'Отлично! А у тебя?', sender: 'me', time: '14:21', reactions: [] },
    { id: 3, text: 'Тоже хорошо, спасибо! 😊', sender: 'them', time: '14:22', reactions: ['😊'] },
    { id: 4, text: 'Готов к завтрашней встрече?', sender: 'them', time: '14:23', reactions: [] },
  ];

  if (!isLoggedIn) {
    return (
      <div className="h-screen flex items-center justify-center bg-background" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="max-w-md w-full px-6">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">💬</div>
            <h1 className="text-4xl font-bold text-gradient mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Frekygramm
            </h1>
            <p className="text-muted-foreground text-lg">Премиум мессенджер нового поколения</p>
          </div>
          
          <div className="space-y-3">
            <Button
              onClick={() => setIsLoggedIn(true)}
              className="w-full h-14 text-lg gradient-primary text-white shadow-xl hover:shadow-2xl transition-all"
            >
              <Icon name="MessageCircle" size={24} className="mr-2" />
              Начать общение
            </Button>
            <Button
              onClick={() => setIsLoggedIn(true)}
              variant="outline"
              className="w-full h-14 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              <Icon name="LogIn" size={24} className="mr-2" />
              Продолжить общаться
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <Badge className="gradient-primary text-white">
              <Icon name="Crown" size={14} className="mr-1" />
              Premium доступен
            </Badge>
            <Badge className="gradient-accent text-white">
              <Icon name="Zap" size={14} className="mr-1" />
              Быстро и надежно
            </Badge>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-background" style={{ fontFamily: 'Inter, sans-serif' }}>
      <header className="gradient-primary px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="text-3xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="text-white">Frekygramm</span>
          </div>
          <Badge className="bg-yellow-400 text-black hover:bg-yellow-400 font-semibold">
            <Icon name="Crown" size={12} className="mr-1" />
            PREMIUM
          </Badge>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Icon name="Search" size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Icon name="Settings" size={20} />
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-20 border-r border-border flex flex-col items-center py-6 gap-6 bg-sidebar-background">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-2xl transition-all ${
              activeTab === 'chats'
                ? 'bg-primary text-primary-foreground shadow-lg scale-110'
                : 'hover:bg-muted text-muted-foreground'
            }`}
            onClick={() => setActiveTab('chats')}
          >
            <Icon name="MessageCircle" size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-2xl transition-all ${
              activeTab === 'calls'
                ? 'bg-primary text-primary-foreground shadow-lg scale-110'
                : 'hover:bg-muted text-muted-foreground'
            }`}
            onClick={() => setActiveTab('calls')}
          >
            <Icon name="Phone" size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-2xl transition-all ${
              activeTab === 'stories'
                ? 'bg-primary text-primary-foreground shadow-lg scale-110'
                : 'hover:bg-muted text-muted-foreground'
            }`}
            onClick={() => setActiveTab('stories')}
          >
            <Icon name="Circle" size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-2xl transition-all ${
              activeTab === 'contacts'
                ? 'bg-primary text-primary-foreground shadow-lg scale-110'
                : 'hover:bg-muted text-muted-foreground'
            }`}
            onClick={() => setActiveTab('contacts')}
          >
            <Icon name="Users" size={24} />
          </Button>
          <div className="flex-1" />
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-2xl transition-all ${
              activeTab === 'profile'
                ? 'bg-primary text-primary-foreground shadow-lg scale-110'
                : 'hover:bg-muted text-muted-foreground'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            <Icon name="User" size={24} />
          </Button>
        </div>

        <div className="w-80 border-r border-border bg-card">
          <div className="p-4">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input placeholder="Поиск..." className="pl-10 bg-muted border-0" />
            </div>
          </div>

          <ScrollArea className="h-[calc(100vh-180px)]">
            {activeTab === 'chats' && (
              <div>
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    className={`px-4 py-3 cursor-pointer transition-all hover:bg-muted ${
                      selectedChat === chat.id ? 'bg-muted border-l-4 border-primary' : ''
                    }`}
                    onClick={() => setSelectedChat(chat.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="text-2xl">{chat.avatar}</AvatarFallback>
                        </Avatar>
                        {chat.online && (
                          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-card"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground truncate">{chat.name}</span>
                          {chat.premium && <Icon name="Crown" size={14} className="text-yellow-400 flex-shrink-0" />}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-muted-foreground">{chat.time}</span>
                        {chat.unread > 0 && (
                          <Badge className="gradient-primary text-white h-5 px-2 text-xs">{chat.unread}</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'calls' && (
              <div>
                {calls.map((call) => (
                  <div key={call.id} className="px-4 py-3 hover:bg-muted cursor-pointer transition-all">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="text-2xl">{call.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground">{call.name}</span>
                          <Icon
                            name={call.type === 'incoming' ? 'PhoneIncoming' : call.type === 'outgoing' ? 'PhoneOutgoing' : 'PhoneMissed'}
                            size={14}
                            className={
                              call.type === 'missed'
                                ? 'text-destructive'
                                : call.type === 'incoming'
                                ? 'text-green-500'
                                : 'text-accent'
                            }
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">{call.duration || 'Пропущенный'}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{call.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'stories' && (
              <div className="p-4">
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">КРУЖОЧКИ</h3>
                <div className="grid grid-cols-4 gap-4">
                  {stories.map((story) => (
                    <div key={story.id} className="flex flex-col items-center gap-2 cursor-pointer group">
                      <div
                        className={`w-16 h-16 rounded-full p-1 transition-all ${
                          story.viewed ? 'bg-muted' : 'gradient-primary'
                        }`}
                      >
                        <div className="w-full h-full bg-card rounded-full flex items-center justify-center text-2xl">
                          {story.avatar}
                        </div>
                      </div>
                      <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">
                        {story.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contacts' && (
              <div>
                {contacts.map((contact) => (
                  <div key={contact.id} className="px-4 py-3 hover:bg-muted cursor-pointer transition-all">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="text-2xl">{contact.avatar}</AvatarFallback>
                        </Avatar>
                        {contact.online && (
                          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-card"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-foreground block">{contact.name}</span>
                        <p className="text-sm text-muted-foreground">{contact.phone}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="text-accent hover:bg-accent/20">
                        <Icon name="MessageCircle" size={18} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="p-6">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="relative">
                    <Avatar className="w-24 h-24">
                      <AvatarFallback className="text-4xl">🚀</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-card"></div>
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Мой Профиль
                    </h2>
                    <p className="text-sm text-muted-foreground">@myusername</p>
                  </div>
                  <Badge className="gradient-primary text-white">
                    <Icon name="Crown" size={14} className="mr-1" />
                    Premium Active
                  </Badge>
                </div>

                <div className="space-y-2">
                  <Card className="p-4 hover:bg-muted transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Icon name="Palette" className="text-primary" size={20} />
                      <span className="font-medium">Кастомизация</span>
                    </div>
                  </Card>
                  <Card className="p-4 hover:bg-muted transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Icon name="Sticker" className="text-secondary" size={20} />
                      <span className="font-medium">Стикеры Premium</span>
                    </div>
                  </Card>
                  <Card className="p-4 hover:bg-muted transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Icon name="Bell" className="text-accent" size={20} />
                      <span className="font-medium">Уведомления</span>
                    </div>
                  </Card>
                  <Card className="p-4 hover:bg-muted transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Icon name="Shield" className="text-green-500" size={20} />
                      <span className="font-medium">Приватность</span>
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </ScrollArea>
        </div>

        <div className="flex-1 flex flex-col">
          {selectedChat && activeTab === 'chats' ? (
            <>
              <div className="px-6 py-4 border-b border-border bg-card flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="text-xl">
                      {chats.find((c) => c.id === selectedChat)?.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      {chats.find((c) => c.id === selectedChat)?.name}
                      {chats.find((c) => c.id === selectedChat)?.premium && (
                        <Icon name="Crown" size={14} className="text-yellow-400" />
                      )}
                    </h3>
                    <p className="text-sm text-green-500">онлайн</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-accent hover:bg-accent/20">
                    <Icon name="Phone" size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-accent hover:bg-accent/20">
                    <Icon name="Video" size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-muted">
                    <Icon name="MoreVertical" size={20} />
                  </Button>
                </div>
              </div>

              <ScrollArea className="flex-1 p-6">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-md px-4 py-3 rounded-2xl transition-all hover:shadow-lg group relative ${
                          message.sender === 'me'
                            ? 'gradient-primary text-white'
                            : 'bg-card text-foreground border border-border'
                        }`}
                      >
                        <p>{message.text}</p>
                        <div className="flex items-center justify-between mt-1 gap-3">
                          <span className={`text-xs ${message.sender === 'me' ? 'text-white/70' : 'text-muted-foreground'}`}>
                            {message.time}
                          </span>
                          {message.reactions.length > 0 && (
                            <div className="flex gap-1">
                              {message.reactions.map((reaction, i) => (
                                <span key={i} className="text-sm">
                                  {reaction}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="p-4 border-t border-border bg-card">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="hover:bg-muted">
                    <Icon name="Paperclip" size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-muted">
                    <Icon name="Smile" size={20} />
                  </Button>
                  <Input placeholder="Напишите сообщение..." className="flex-1 bg-muted border-0" />
                  <Button className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all">
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">💬</div>
                <h2 className="text-2xl font-bold text-gradient" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Frekygramm Premium
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Выберите чат, чтобы начать общение с премиум функциями
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;