
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Folder, FileText, Clock, CheckCircle, AlertCircle, Phone, MessageSquare, Upload, Download } from 'lucide-react';

interface Application {
  id: string;
  type: string;
  status: 'pending' | 'in-progress' | 'completed' | 'rejected';
  date: string;
  progress: number;
  messages: number;
  documents: number;
}

interface Document {
  id: string;
  name: string;
  type: string;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
}

const CRMDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [applications, setApplications] = useState<Application[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate fetching data
    if (isLoggedIn) {
      // Mock data
      setApplications([
        { 
          id: 'APP001', 
          type: 'Private Limited Company Registration', 
          status: 'in-progress', 
          date: '2025-02-15', 
          progress: 65,
          messages: 3,
          documents: 5
        },
        { 
          id: 'APP002', 
          type: 'Trademark Registration', 
          status: 'pending', 
          date: '2025-03-01', 
          progress: 20,
          messages: 1,
          documents: 2
        },
        { 
          id: 'APP003', 
          type: 'GST Registration', 
          status: 'completed', 
          date: '2025-01-10', 
          progress: 100,
          messages: 0,
          documents: 4
        }
      ]);

      setDocuments([
        {
          id: 'DOC001',
          name: 'Certificate of Incorporation',
          type: 'PDF',
          status: 'approved',
          date: '2025-02-20'
        },
        {
          id: 'DOC002',
          name: 'Board Resolution',
          type: 'PDF',
          status: 'pending',
          date: '2025-03-05'
        },
        {
          id: 'DOC003',
          name: 'ID Proof',
          type: 'JPG',
          status: 'approved',
          date: '2025-02-18'
        },
        {
          id: 'DOC004',
          name: 'Address Proof',
          type: 'PDF',
          status: 'rejected',
          date: '2025-02-25'
        }
      ]);
    }
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Demo login - in a real app, this would validate against a database
    if (email === 'demo@example.com' && password === 'password') {
      setIsLoggedIn(true);
      toast({
        title: "Success",
        description: "You have successfully logged in",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Try demo@example.com / password",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'in-progress':
        return 'text-blue-600 bg-blue-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'rejected':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} />;
      case 'in-progress':
        return <Clock size={16} />;
      case 'pending':
        return <Clock size={16} />;
      case 'rejected':
        return <AlertCircle size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Client Portal Login</CardTitle>
              <CardDescription>
                Login to access your business applications and documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <input
                    id="password"
                    type="password"
                    className="w-full p-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
                <div className="pt-2">
                  <Button type="submit" className="w-full">Login</Button>
                </div>
                <div className="text-center text-sm text-gray-500">
                  <p>Demo credentials: demo@example.com / password</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Client Dashboard</h1>
        <Button variant="outline" onClick={() => setIsLoggedIn(false)}>Logout</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">{applications.length}</div>
              <Folder className="h-8 w-8 text-brand-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">{documents.length}</div>
              <FileText className="h-8 w-8 text-brand-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Support</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="justify-start" size="sm">
                <Phone size={16} className="mr-2" /> Call Support
              </Button>
              <Button variant="outline" className="justify-start" size="sm">
                <MessageSquare size={16} className="mr-2" /> Chat Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="applications" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="applications">My Applications</TabsTrigger>
          <TabsTrigger value="documents">My Documents</TabsTrigger>
        </TabsList>
        
        <TabsContent value="applications">
          {applications.length > 0 ? (
            <div className="space-y-4">
              {applications.map((app) => (
                <Card key={app.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-medium text-lg">{app.type}</h3>
                          <p className="text-sm text-gray-500">Application ID: {app.id}</p>
                          <p className="text-sm text-gray-500">Submitted: {app.date}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(app.status)}`}>
                          {getStatusIcon(app.status)}
                          <span>{app.status.charAt(0).toUpperCase() + app.status.slice(1)}</span>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{app.progress}%</span>
                        </div>
                        <Progress value={app.progress} className="h-2" />
                      </div>
                      
                      <div className="flex justify-between gap-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          View Details
                        </Button>
                        <Button variant="secondary" size="sm" className="flex-1">
                          <MessageSquare size={14} className="mr-1" /> Messages ({app.messages})
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Folder className="h-12 w-12 text-gray-300 mb-3" />
                <p className="text-gray-500">No applications found</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="documents">
          {documents.length > 0 ? (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Your Documents</CardTitle>
                  <Button size="sm">
                    <Upload size={14} className="mr-1" /> Upload New
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-sm">Document Name</th>
                        <th className="text-left py-3 px-4 font-medium text-sm">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                        <th className="text-right py-3 px-4 font-medium text-sm">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {documents.map((doc) => (
                        <tr key={doc.id} className="border-b last:border-0 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              <FileText size={16} className="mr-2 text-gray-500" />
                              <span>{doc.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-500">{doc.date}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                              {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="ghost" size="sm">
                              <Download size={14} className="mr-1" /> Download
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <FileText className="h-12 w-12 text-gray-300 mb-3" />
                <p className="text-gray-500">No documents found</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CRMDashboard;
