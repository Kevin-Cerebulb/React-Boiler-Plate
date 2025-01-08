import { cn } from "@/lib/utils";
import { Button } from "@/components/shadcn-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-ui/card";
import { Input } from "@/components/shadcn-ui/input";
import { Link } from "react-router-dom";
import WordPullUp from "@/components/magic-ui/word-pull-up";
import TypingAnimation from "@/components/magic-ui/typing-animation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/lib/schemas";

export function LoginForm({ className, ...props }) {
  const form = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (data) => {
    /* On Submit Code goes Here */
    console.log("Form Submitted");
    console.log(data);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="backdrop-blur-sm bg-card-glass border border-white/20 rounded-xl shadow-lg px-6 max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            <TypingAnimation className="text-xl">Welcome back</TypingAnimation>
          </CardTitle>
          <CardDescription>
            <WordPullUp className="text-sm">
              Login with your credentials
            </WordPullUp>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submitHandler)}>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your email"
                              variant="ghost"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />{" "}
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your password"
                              variant="ghost"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />{" "}
                          <FormDescription className="flex justify-end text-foreground">
                            <Link
                              to="/forgot-password"
                              className="ml-auto text-sm underline-offset-4 hover:underline mt-3 mb-2"
                            >
                              Forgot your password?
                            </Link>
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        {/* Quotes suggested by Clients */}
      </div>
    </div>
  );
}
