import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { waLink } from "@/lib/site-data";

const homeTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa / Duplex", "Kitchen only"];
const budgets = ["Under ₹5 lakh", "₹5–10 lakh", "₹10–20 lakh", "₹20 lakh+", "Not sure yet"];

export function EstimateForm({ onDone, compact = false }: { onDone?: () => void; compact?: boolean }) {
  const [homeType, setHomeType] = useState("");
  const [budget, setBudget] = useState("");
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const city = String(data.get("city") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    // There's no backend to receive this form, so the request is sent
    // straight to MNS Interiors' own WhatsApp with every field filled in —
    // that's the one channel guaranteed to actually reach them.
    const lines = [
      "Hello MNS Interiors, I'd like a free estimate.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `City: ${city}`,
      `Home type: ${homeType}`,
      `Budget: ${budget}`,
    ];
    if (message) lines.push(`Message: ${message}`);

    window.setTimeout(() => {
      setSending(false);
      window.open(waLink(lines.join("\n")), "_blank", "noreferrer noopener");
      form.reset();
      setHomeType("");
      setBudget("");
      toast.success("Opening WhatsApp…", {
        description: "Send the pre-filled message and a design consultant will reply the same day.",
      });
      onDone?.();
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field id="name" label="Full name">
          <Input id="name" name="name" required placeholder="Your name" autoComplete="name" />
        </Field>
        <Field id="phone" label="Phone">
          <Input
            id="phone"
            name="phone"
            required
            type="tel"
            pattern="[0-9+\s-]{8,15}"
            placeholder="+91 98xxx xxxxx"
            autoComplete="tel"
          />
        </Field>
        <Field id="email" label="Email">
          <Input id="email" name="email" required type="email" placeholder="you@email.com" autoComplete="email" />
        </Field>
        <Field id="city" label="City">
          <Input id="city" name="city" required placeholder="Visakhapatnam" autoComplete="address-level2" />
        </Field>
        <Field id="homeType" label="Home type">
          <Select value={homeType} onValueChange={setHomeType} name="homeType" required>
            <SelectTrigger id="homeType" className="w-full">
              <SelectValue placeholder="Select home type" />
            </SelectTrigger>
            <SelectContent>
              {homeTypes.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field id="budget" label="Budget">
          <Select value={budget} onValueChange={setBudget} name="budget" required>
            <SelectTrigger id="budget" className="w-full">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgets.map((b) => (
                <SelectItem key={b} value={b}>
                  {b}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
      <Field id="message" label="Message (optional)">
        <Textarea id="message" name="message" rows={3} placeholder="Tell us about your home and timeline" />
      </Field>
      <Button type="submit" size="lg" className="w-full" disabled={sending}>
        {sending ? "Opening WhatsApp…" : "Submit via WhatsApp"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Opens WhatsApp with your details filled in — send it and a design consultant will reply the same day.
      </p>
    </form>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs tracking-wide text-muted-foreground uppercase">
        {label}
      </Label>
      {children}
    </div>
  );
}
