import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import XIcon from "../assets/icons/x.svg?react";

export default function PageComponents() {
  return (
    <Container>
      <div className="grid gap-10">
        <div className="flex flex-col gap-2">
          <Text variant="body-md" className="text-pink-base">
            Bem-vindo ao seu Todo!
          </Text>
          <Text className="text-green-base">Você tem 2 tarefas pendentes</Text>
          <Text variant="body-md-bold">Organize seu dia com eficiência</Text>
        </div>
        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={CheckIcon} />
          <Icon svg={PencilIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={SpinnerIcon} animate />
          <Icon svg={XIcon} />
        </div>
        <div className="flex gap-1">
          <Badge variant="secondary">3 novas</Badge>
          <Badge>2 concluídas</Badge>
          <Badge loading>Carregando...</Badge>
        </div>
        <div>
          <Button icon={PlusIcon}>Nova tarefa</Button>
          <Button icon={PlusIcon} handling>
            Adicionando...
          </Button>
        </div>
        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} aria-label="Excluir tarefa" />
          <ButtonIcon
            icon={PencilIcon}
            variant="secondary"
            aria-label="Editar tarefa"
          />
          <ButtonIcon
            icon={CheckIcon}
            variant="tertiary"
            aria-label="Concluir tarefa"
          />
          <ButtonIcon icon={PlusIcon} disabled aria-label="Adicionar tarefa" />
          <ButtonIcon icon={PlusIcon} loading aria-label="Adicionando tarefa" />
          <ButtonIcon icon={PlusIcon} handling aria-label="Processando" />
        </div>
        <div>
          <InputText
            placeholder="Descreva sua nova tarefa..."
            className="w-full"
          />
        </div>
        <div className="flex gap-2 items-center">
          <InputCheckbox />
          <Text as="label">Comprar leite</Text>
          <InputCheckbox loading />
          <Text as="label">Enviar relatório</Text>
        </div>
        <div>
          <Card size="md">
            <Text variant="body-md-bold">Tarefa: Estudar React</Text>
            <Text variant="body-sm-bold">Prioridade: Alta</Text>
          </Card>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="h-6 w-96" />
        </div>
      </div>
    </Container>
  );
}
