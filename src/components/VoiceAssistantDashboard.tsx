import { useState } from "react";
import { Mic, Volume2, Settings, Search, Download, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const VoiceAssistantDashboard = () => {
  const [sensitivity, setSensitivity] = useState([65]);
  const [isLive, setIsLive] = useState(true);

  const analyticsData = [
    { label: "Live Analysis", value: "Live", color: "success" },
    { label: "Pivot Problems", value: "4", color: "warning" },
    { label: "Meeting Support", value: "1", color: "info" },
    { label: "Order Inquiries", value: "3", color: "purple" },
    { label: "Software Access", value: "0", color: "muted" },
  ];

  const knowledgeBaseItems = [
    { name: "User Manual v2", size: "2.4 MB" },
    { name: "FAQ Database", size: "1.2 MB" },
    { name: "Product Catalog", size: "4.1 MB" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
              <Mic className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Voice Assistant Dashboard
              </h1>
              <p className="text-sm text-muted-foreground">Enterprise Analytics Platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Export
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-73px)]">
        {/* Left Sidebar */}
        <aside className="w-80 border-r bg-card/50 backdrop-blur-sm p-6 space-y-6">
          <Card className="border-success/20 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-success">Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {analyticsData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                  <span className="text-sm text-foreground">{item.label}</span>
                  <Badge 
                    variant="outline" 
                    className={`
                      ${item.color === 'success' ? 'border-success text-success' : ''}
                      ${item.color === 'warning' ? 'border-warning text-warning' : ''}
                      ${item.color === 'info' ? 'border-info text-info' : ''}
                      ${item.color === 'purple' ? 'border-purple text-purple' : ''}
                      ${item.color === 'muted' ? 'border-muted text-muted-foreground' : ''}
                    `}
                  >
                    {item.value}
                  </Badge>
                </div>
              ))}
              <div className="pt-4 border-t border-border/50">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Total Issues</span>
                  <span className="font-semibold text-warning">75%</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">Resolved</div>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Voice Assistant */}
          <Card className="border-primary/20 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-primary">Voice Assistant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Microphone</label>
                <div className="mt-1 p-2 bg-secondary/50 rounded-md text-sm">
                  HyperX Cloud II
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Live Audio
                </label>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Ready</span>
                  <Badge variant={isLive ? "default" : "secondary"} className="bg-success text-success-foreground">
                    Click to start
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sensitivity */}
          <Card className="border-purple/20 shadow-lg">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-3 block">
                    Sensitivity
                  </label>
                  <div className="space-y-2">
                    <Slider
                      value={sensitivity}
                      onValueChange={setSensitivity}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>0</span>
                      <span className="font-medium text-primary">{sensitivity[0]}</span>
                      <span>100</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8">
                  <div className="text-center text-muted-foreground text-sm mb-4">
                    Initializing audio recognition...
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-6">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 bg-gradient-to-t rounded-full transition-all duration-300 ${
                          i % 3 === 0 ? "h-8 from-primary to-accent" : 
                          i % 2 === 0 ? "h-6 from-accent to-info" : "h-4 from-info to-primary"
                        }`}
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          animation: "pulse 2s infinite"
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-center">
                    <Button 
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
                      size="lg"
                    >
                      <Volume2 className="h-5 w-5 mr-2" />
                      Start Listening
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Live Conversation */}
          <Card className="border-info/20 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-info">Live Conversation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Current Session</span>
                  <span className="text-sm font-medium">2 msgs</span>
                </div>
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-3 rounded-lg">
                  <p className="text-sm text-foreground/80">
                    Gear problem! How bad is it broken? Als je specifieke informatie nodig hebt, laat het me dan weten!
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    13:26 • meeting support
                  </div>
                </div>
                <div className="bg-accent/20 p-3 rounded-lg ml-6">
                  <p className="text-sm text-foreground">
                    Hot topic our hair good girl/band
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    11:45 • audio issue
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs text-muted-foreground">Real-time analysis</span>
                <div className="mt-1 text-sm font-medium text-warning">2 total</div>
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 border-l bg-card/50 backdrop-blur-sm p-6 space-y-6">
          <Card className="border-accent/20 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-accent">Knowledge Base</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search..." 
                  className="pl-10 bg-secondary/50"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Upload files</span>
                  <span>Browse</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3 text-foreground">Recent</h4>
                <div className="space-y-2">
                  {knowledgeBaseItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors group">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.size}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">3 Docs</span>
                  <span className="font-semibold text-info">7.9MB Used</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default VoiceAssistantDashboard;