'use client';

import { useState, useTransition, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { askNihanAnything, type AskNihanAnythingOutput } from '@/ai/flows/ask-nihan-anything';
import { Bot, User, Send, Feather } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function AIChatAssistantSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInput('');

    startTransition(async () => {
      try {
        const aiResponse: AskNihanAnythingOutput = await askNihanAnything({ question: newUserMessage.content });
        const newAiMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: aiResponse.answer,
        };
        setMessages((prevMessages) => [...prevMessages, newAiMessage]);
      } catch (error) {
        console.error('Error getting AI response:', error);
        const errorResponseMessage: Message = {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: "Sorry, I couldn't process that. Please try again.",
          };
        setMessages((prevMessages) => [...prevMessages, errorResponseMessage]);
      }
    });
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <section id="chat" className="py-16 lg:py-24 bg-background">
      <div className="container max-w-screen-md mx-auto px-4">
        <Card className="shadow-xl overflow-hidden">
          <CardHeader className="text-center bg-primary/5">
            <div className="mx-auto mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground">
                <Feather size={32} />
            </div>
            <CardTitle className="text-3xl lg:text-4xl font-bold text-primary">Ask Nihan Anything</CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-2">
              Chat with my AI assistant to learn more about me and my work.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px] p-6" ref={scrollAreaRef}>
              <div className="space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      'flex items-start gap-3',
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {message.role === 'assistant' && (
                      <Avatar className="h-8 w-8 border border-primary/50">
                        <AvatarFallback><Bot size={18} className="text-primary" /></AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        'max-w-[70%] rounded-xl px-4 py-3 text-sm shadow-md',
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      )}
                    >
                      {message.content.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </div>
                    {message.role === 'user' && (
                       <Avatar className="h-8 w-8 border border-muted-foreground/50">
                        <AvatarFallback><User size={18} /></AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isPending && messages[messages.length-1]?.role === 'user' && (
                   <div className="flex items-start gap-3 justify-start">
                     <Avatar className="h-8 w-8 border border-primary/50">
                        <AvatarFallback><Bot size={18} className="text-primary" /></AvatarFallback>
                      </Avatar>
                      <div className="max-w-[70%] rounded-xl px-4 py-3 text-sm shadow-md bg-muted text-foreground">
                        <div className="flex items-center space-x-2">
                            <div className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse delay-75"></div>
                            <div className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse delay-150"></div>
                            <div className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse delay-300"></div>
                        </div>
                      </div>
                   </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 border-t bg-muted/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex w-full items-center space-x-3"
            >
              <Input
                type="text"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
                disabled={isPending}
              />
              <Button type="submit" size="icon" disabled={isPending || input.trim() === ''}>
                <Send className="h-5 w-5" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
