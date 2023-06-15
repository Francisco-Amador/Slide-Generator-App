interface schemaProp {
    schema: number
    handleSchemaChange: (schema: number) => void;
}export default function CheckBoxSchema({ schema, handleSchemaChange }: schemaProp) {
    return (
        <div className="flex items-center m-4">
            <input
                type="checkbox"
                value=""
                onChange={() => handleSchemaChange(schema)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">
                {schema}
            </label>
        </div>
    );
}
