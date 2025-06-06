import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";

const MainTextarea = ({ label, name, placeholder }: { label?: string; name: string, placeholder?: string }) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            <label className="text-sm font-bold mb-2 inline-block">{label}</label>
            <Textarea placeholder={placeholder}  {...register(name)} />
            {errors[name] && (
                <p className="text-sm" style={{ color: "red" }}>
                    {typeof errors[name]?.message === "string" && errors[name]?.message}
                </p>
            )}
        </div>
    );
};

export default MainTextarea;
