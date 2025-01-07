import { FormSchema } from "@/lib/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { useForm } from "react-hook-form";
import { Input } from "../input";
import { Button } from "../button";
import { MultiSelect } from "@/components/multi-select";
import { options } from "@/lib/constant";

export function FormDemo() {
  const form = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      select: [],
    },
  });

  const submitHandler = (data) => {
    /* On Submit Code goes Here */
    console.log("Form Submitted");
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="space-y-6"
      >
        {/* Email Control */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  variant="secondary"
                  {...field}
                />
              </FormControl>
              <FormDescription>{/* This is optional */}</FormDescription>
              <FormMessage /> {/* This will show the error message */}
            </FormItem>
          )}
        />

        {/* Password Control */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage /> {/* This will show the error message */}
            </FormItem>
          )}
        />

        {/* Select Control */}
        <FormField
          control={form.control}
          name="select"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select any Option</FormLabel>
              <FormControl>
                <MultiSelect
                  getOptionValue={(option) => option?.value}
                  onChange={(item) => field.onChange(item.value)}
                  options={options}
                  {...field}
                />
              </FormControl>
              <FormMessage /> {/* This will show the error message */}
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
